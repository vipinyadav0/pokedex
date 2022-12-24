import React from 'react';
import { Container } from 'react-bootstrap';
import { Form, Button, Input, FormGroup } from 'reactstrap';


export default function SearchPokemon(props) {

    const [search, setSearch] = React.useState(''); // storing search query


    return (
        <Container>
            <Form>
                <FormGroup className='my-4  mb-4'>
                    <div className='d-flex'>
                        <Input
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search for a pokemon"
                        />
                        <Button
                            className=''
                            onClick={(e) => props.getPokemon(search)}
                            color="primary">
                            Search
                        </Button>
                    </div>

                </FormGroup>
            </Form>

        </Container>
    )
}