import React, {useEffect} from "react";
import { Container, Button} from "reactstrap";

const Home = () => {

    useEffect(()=>{
        document.title = "Course App || Home"
    }, []);

    return (
        <div>
            <div className="text-center">
                <h1 className="">Atharva Jadhao</h1>
                <p>This react app is developed for learning purpose. Whose backend is written in spring boot</p>
                <Container>
                    <Button color="primary">Start Using</Button>
                </Container>
            </div>
        </div>
    )
}

export default Home;