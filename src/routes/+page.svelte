<script>
    // const bezier1 = {
    //     path: "M 10 10 C 20 20, 40 20, 50 10",
    //     strokeColor: "red"
    // }
</script>

<svelte:head>
    <title>Welcome to Qubit Tech</title>
</svelte:head>

<div class="banner fadein">
    <div class="heading">
        <h3>LET'S GET YOUR BUSINESS SERVICES ONLINE</h3>
            <p>
                We design full stack web servers in the cloud that keep your
                business and services always available to you and your
                clients from anywhere in the world.
            </p>
    </div>
    <div class="incline angle1"></div>
    <div class="incline angle2"></div>
</div>


<style>
    .banner {
        position: relative;
        display: flex;
        width: 300px;
        height: 400px;
        background-color: var(--color-1);
        margin: auto;
        align-items: center;
        border-radius: 10px;
    }

    .heading p {
        padding: .5em;
    }

    .heading {
        text-align: center;
        padding: 2em;
        z-index: 1;
    }

    
    .fadein {
        opacity: 0;
        animation: fadein .5s ease-in forwards;
    }

    @keyframes fadein {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    
    @media screen and (min-width: 600px){
         .banner {
            width: 350px;
        }
        
        .incline {
            position: absolute;
            width: inherit;
            height: inherit;
            border-radius: 10px;
        }

        .angle1 {
            z-index: -3;
            border: 4px solid rgba(80, 87, 98, .5);
            transform-origin: 10% 90%;
            rotate: 0deg;
            animation: tilt1 1s .5s forwards;
        }

        .angle2 {
            z-index: -2;
            border: 4px solid rgba(145, 86, 161, 0.9);
            transform-origin: 10% 90%;
            rotate: 0deg;
            animation: tilt2 1s .5s forwards;
        }

        @keyframes tilt1 {
            from {
                rotate: 0deg;
            }
            to {
                rotate:25deg;
            }
        }

        @keyframes tilt2 {
            from {
                rotate: 0deg;
            }
            to {
                rotate: -25deg;
            }
        }
    }
</style>