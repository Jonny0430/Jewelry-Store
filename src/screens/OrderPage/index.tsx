import { Stack } from "@chakra-ui/react/stack";
import IdeasLeadSection from "./IdeaFormSection";
import WeddingOfferHero from "./Order";
import Page from "../../lib/faqItem";
import OrderSets from "./OrderSets";

// import ProductsPage from "../products/page";

export function Order() {
    return (
        <Stack>
            <WeddingOfferHero />
            <OrderSets />
            <IdeasLeadSection />
            <Page />
        </Stack>
    )
    } 