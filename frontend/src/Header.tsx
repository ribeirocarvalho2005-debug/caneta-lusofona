import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function Header() {
    const navigationItems = ["Articles", "About us", "Contact us", "Authors"];

    return (
        <header className="header">
            <div className="header-content">
                <a className="header-brand" href="/" aria-label="Caneta Lusófona">
                    <img src="/logo.png" alt="" />
                    <span>Caneta Lusófona</span>
                </a>

                <Stack
                    className="header-navigation"
                    component="nav"
                    direction="row"
                    spacing={{ xs: 0.5, sm: 1 }}
                    aria-label="Main navigation"
                >
                    {navigationItems.map((item) => (
                        <Button className="header-button" key={item}>
                            {item}
                        </Button>
                    ))}
                </Stack>
            </div>
        </header>
    );
}
