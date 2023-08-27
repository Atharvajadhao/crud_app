import React from 'react';
import { Card, CardBody } from 'reactstrap';

function Header({name, title})
{
    return(
        <div>
            <Card className='text-center m-2 bg-warning'>
                <CardBody>
                <h1 className='display-3'>Welcome to courses application</h1>
                </CardBody>
            </Card>
        </div>
    )
}

export default Header;