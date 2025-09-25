import { Stack, Typography } from "@mui/material"

function Header() {
    return (
        <Stack spacing={1} direction="column">
            <Typography variant="h2">
                Chris Wong
            </Typography>
            <Typography variant="h4">
                Associate Software Engineer
            </Typography>
            <Typography variant="h6">
                My job is to pretend I know what I'm doing
            </Typography>
        </Stack>
    )
}

export default Header