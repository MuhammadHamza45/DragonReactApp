import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import axios from "axios";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import PricingIndexV2 from "./PricingPlanV2";
function Payment(){
    return <>
        <PricingIndexV2 />
    </>
}
export default Payment;