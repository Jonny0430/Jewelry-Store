import { Stack } from '@chakra-ui/react'
import NavbarHome from './NavbarHome'
import ServicesGrid from './CategoryTiles'
import PromoCard from './PromoCard'
import HolidaysTimeline from './HolidaysTimeline'
import PopularSets from './PopularSetsSection'
import NewsCard from './NewsSection'
import CareSection from './CareSection'


export function Home() {
    return (
        <Stack>
            <NavbarHome imageSrc='/public/homeN/navbarh.png' />
            <ServicesGrid />
            <PromoCard />
            <HolidaysTimeline />
            <PopularSets />
            <NewsCard />
            <CareSection />
        </Stack>
    )
    } 