import { Suspense } from "react";
import ServicesClient from "./ProductClient";

export default function ServicesPage() {
  return (
    <Suspense fallback={null}>
      <ServicesClient />
    </Suspense>
  );
}
