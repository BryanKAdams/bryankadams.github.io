import React from 'react';
import {Button} from '@material-ui/core/'
import {Typography} from '@material-ui/core/'

function Header() {
    return (
        <section style={{backgroundColor: "#252932", display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "center", color: "#fff", height: "calc(100vh)", padding: "0 10px"}}>
            <div style={{position: "absolute", left: "0", top: "0",height: "100%" }}>
                <canvas style={{ height: "100vh", width: "100vw" }}>

                </canvas>
            </div>
            <div style={{ display: "flex", alignItems: "center",  flexDirection: "column", justifyContent: "center"}}>
                <Typography style={{zIndex: "999"}} variant="h1" component="h2">
                    Hello, I'm Bryan Adams.
                </Typography>
                <Typography style={{zIndex: "999"}} variant="h1" component="h2">
                    I'm a full-stack developer.
                </Typography>
                <Button color="inherit">
                    View My Work
            </Button>
            </div>
        </section>
    )
}

export default Header