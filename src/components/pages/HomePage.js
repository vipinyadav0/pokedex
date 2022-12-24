import React from 'react';
import SearchPokemon from './SearchPokemon';
import { fetchPokemon } from '../services/getPokemon';
import PokemonData from '../pages/PokemonData';
import { Spinner, Alert } from 'react-bootstrap';
import 'react-loading-skeleton/dist/skeleton.css'

const spinnerStyle = {
    width: '10rem',
    height: '10rem',
    borderWidth: '1rem',
};

const spinnerWrapperStyle = {
    textAlign: 'center',
    marginTop: '50px',
}

export default function HomePage() {

    const [pokemon, setPokemon] = React.useState();
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(false);
    const [errorMsg, setErrorMsg] = React.useState('');

    const getPokemon = async (query) => {
        console.log(query);
        if (!query) {
            setErrorMsg('You must enter a Pokemon');
            setError(true);
            return;
        } console.log(query)
        setError(false);
        setLoading(true);
        setTimeout(async () => {
            try {
                const response = await fetchPokemon(query);
                const results = await response;
                console.log(results);
                setPokemon(results);
                setLoading(false);

            } catch (err) {
                // console.log(err);
                setLoading(false);
                setError(true);
                setErrorMsg('Pokemon not found.');
            }
        }, 1000);
    }

    return (
        <div>
            {error ? (<Alert variant='danger'>{errorMsg}</Alert>) : null}
            <SearchPokemon getPokemon={getPokemon} />
            {loading ? (
                <div style={spinnerWrapperStyle}>
                    <Spinner animation="border" style={spinnerStyle} />
                </div>
            ) : null}
            {!loading && pokemon ? (
                <PokemonData
                    pokemon={pokemon}
                />
            ) : null}
        </div>
    )
}