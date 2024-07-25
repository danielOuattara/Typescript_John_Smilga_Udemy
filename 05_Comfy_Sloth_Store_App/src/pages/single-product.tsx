import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import { customFetch } from "@/utils";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SelectProductColor, SelectProductQuantity } from "@/components";

export default function SingleProduct() {
  return <h1 className="text-4xl">Single Product Page</h1>;
}
