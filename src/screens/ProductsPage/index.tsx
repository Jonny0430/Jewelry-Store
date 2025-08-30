import { Stack } from "@chakra-ui/react/stack"
import CorporateGiftsSection from "./Product"
import CorporateGiftsCarouselEmbla from "./GiftCard"

const Products = () => {
    return (
        <Stack>
            <CorporateGiftsSection />
            <CorporateGiftsCarouselEmbla />
        </Stack>
    )
}

export default Products
