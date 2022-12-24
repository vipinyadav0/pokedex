import React from 'react';
import { Container, Row, Col, Card, ProgressBar } from 'react-bootstrap';
import "./PokemonData.css"


export default function PokemonData(props) {
    console.log(props)
    return (
        <Container className="mt-2">
            <div className='pokemon-name'>
                <h1>{props.pokemon.name}</h1>
                <h2> id: #0{props.pokemon.id}</h2>
            </div>
            <Row>
                <Col xs={12} md={6}>
                    <Card>
                        <Card.Header>
                            <img src={props.pokemon.sprites.front_shiny} alt={props.pokemon.name} />

                            <h5>Height: {props.pokemon.height} m</h5>
                            <h5>Weight: {props.pokemon.weight} lbs</h5>
                        </Card.Header>
                    </Card>
                    <Card>
                        <Card.Body>
                            <h2>Types</h2>
                            <div className='d-flex justify-content-around'>
                                {props.pokemon.types.map((type, key) => {
                                    return (
                                        <div key={key} className={`type-${key}`}>
                                            <strong> {type.type.name} </strong>
                                        </div>)
                                })}
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={6}>
                    <Card>
                        <Card.Body>
                            <h4>Base Stats</h4>
                            {props.pokemon.stats.map((stat, key) => (
                                <div key={key}>
                                    <strong>{stat.stat.name}</strong>
                                    <ProgressBar now={stat.base_stat} max={100} label={stat.base_stat} />
                                </div>
                            ))}
                        </Card.Body>
                        <Card.Body>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <div className="secondaryContainer">
                <div className="pokemonAbilities"><h2>Abilities</h2>
                    {props.pokemon.abilities.map((ability, key) => (
                        <div key={key}>
                            <h4>{ability.ability.name}</h4>
                        </div>
                    ))}</div>
                <div className="pokemonFamily"><h2>Family</h2></div>
                <div className="pokemonMultipliers"><h2>Multipliers</h2></div>
                <div className="pokemonHelditems"><h2>Held Items</h2>
                    {props.pokemon.held_items.map((item, key) => {
                        return (
                            <span key={key}> <h4>{item.item.name}</h4> </span>
                        )
                    })}
                </div>
            </div>
        </Container>
    )
}