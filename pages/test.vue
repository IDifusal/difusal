
<template>
    <div>
        <div id="app">
    <div class="navbar">
        <div class="navbar-inner">
            <div class="container">
                    <img src="https://cdn.shopify.com/s/files/1/0042/6904/7842/files/DLOGO_295x.png" alt="Dekit" width="20%">
            </div>
        </div>
    </div>
    <div id="loader" v-if="loading">
        <div class="loader"></div>
    </div>
    </div>
    </div>
</template>
<script>
    //basic vue options api
    export default {
        data() {
            return {
            loading:false,
            invoiceId:undefined,
            }
        },
        methods:{
            getQueryParams(){
                const url = new URL(window.location.href);
                const searchParams = url.searchParams;
                this.invoiceId = searchParams.get("invoiceId");
            },
            verifyInvoice(){
                fetch("https://dekitinvoicechecker-812310172.development.catalystserverless.com/server/cf_invoiceChecker/execute?invoiceId=3013165000007288003&ZCFKEY=e075eed2374603b5c2e4ea84b97ac050")
                .then(response => {
                    var output = response.body.output; 
                    var parsedOutput = JSON.parse(output);
                    const status = parsedOutput.status
                    if(status){
                        this.loading = false;
                        this.message= "We are processing your payment. Please wait..."
                    }else{
                        window.href.URL = parsedOutput.invoice_url;
                    }
                })
                .catch(error => {
                    alert( error);
                });
            }
        },        
        mounted() {
    this.getQueryParams();
            this.verifyInvoice();
        }
    }
</script>
<style>
    html, body {
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
    }
    .navbar {
        display: flex;
        justify-content: center;
        padding: 1rem;
    }
    #loader{
        position: fixed;
        top: 0px;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100vw;
        background-color: rgba(0, 0, 0, 0.5);
    }
    .loader {
      border: 16px solid #f3f3f3;
      border-top: 16px solid #3498db;
      border-radius: 50%;
      width: 120px;
      height: 120px;
      animation: spin 2s linear infinite;
      margin: 0 auto;
      margin-top: 100px;
    }
    .container{
        display: flex;
        justify-content: center;
    }
    
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
</style>