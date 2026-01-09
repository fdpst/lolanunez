<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
    <meta charset="utf-8">
    <title>Gracias</title>
    <!-- Compiled and minified CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">

    <!-- Compiled and minified JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    <script src="https://js.stripe.com/v3/"></script>
</head>

<body>

    <div class="container">
        <div class="row">
            <div class="col s12 center-align">
                <h2 class="gray-text">Prueba redireccion - gracias</h2>
            </div>
        </div>
    </div>

    <script type="text/javascript">
        const stripe = Stripe("{{ config('services.stripe.key') }}")

        checkStatus()

        async function checkStatus() {
            const clientSecret = new URLSearchParams(window.location.search).get("payment_intent_client_secret")

            if (!clientSecret) {
                return null
            }

            const {
                paymentIntent
            } = await stripe.retrievePaymentIntent(clientSecret)

            switch (paymentIntent.status) {
                case "succeeded":
                    showAlert("Pago procesado con exito!");
                    break;
                case "processing":
                    showAlert("su pago esta siendo procesado.");
                    break;
                case "requires_payment_method":
                    showAlert("Su pago no se ha procesado, por favor intente de nuevo");
                    break;
                default:
                    showAlert("Algo ha salido mal.");
                    break;
            }
        }

        function showAlert(mensaje) {
            M.toast({
                html: mensaje
            })
        }
    </script>

</body>

</html>