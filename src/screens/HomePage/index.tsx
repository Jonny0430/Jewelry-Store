import { Stack } from '@chakra-ui/react'
import NavbarHome from './NavbarHome'
import ServicesGrid from './CategoryTiles'


export function Home() {
    return (
        <Stack>
            <NavbarHome imageSrc='/public/homeN/navbarh.png' />
            <ServicesGrid />
        </Stack>
    )
    } 