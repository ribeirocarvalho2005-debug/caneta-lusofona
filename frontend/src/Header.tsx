import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

interface Header{

}

export default function Header() {

return (
    <>
        <header className="header">
            <Stack direction="row" spacing={2}>
                <Button id="headerButton" onClick= {() => console.log("Button Pressed")}> Artigos </Button>
                <Button id="headerButton" onClick = {() => console.log("Button Pressed")}> Sobre nós </Button>
                <Button id="headerButton" onClick = {() => console.log("Button Pressed")}> Contacte-nos </Button>
                <Button id="headerButton" onClick = {() => console.log("Button Pressed")}> Autores </Button>
            </Stack>
        </header>
    </>
)

}

