import CustomPaymentForm from "@/components/CustomPaymentForm";


export default function PaymentPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Make a Payment</h1>
      <CustomPaymentForm />
    </div>
  );
}
