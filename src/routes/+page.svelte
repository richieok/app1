<svelte:head>
    <title>Welcome to Qubit Tech</title>
</svelte:head>

<div class="banner fade">
    <h3 class="heading">LET'S GET YOUR BUSINESS SERVICES ONLINE</h3>
    <div class="incline angle1"></div>
    <div class="incline angle2"></div>
</div>
<!-- <p>
    We design full stack web servers in the cloud that keep your
    business and services always available to you and your
    clients from anywhere in the world.
</p> -->


<style>
    .banner {
        position: relative;
        display: flex;
        width: 300px;
        height: 400px;
        background-color: var(--color-1);
        margin: 3em auto;
        align-items: center;
        border-radius: 10px;
    }

    .heading {
        text-align: center;
        padding: 2em;
    }

    
    .fade {
        animation-name: fade;
        animation-duration: 1s;
    }
    
    @media screen and (min-width: 600px){
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
            animation: tilt1 1s forwards;
        }

        .angle2 {
            z-index: -2;
            border: 4px solid rgba(90, 60, 98, .9);
            transform-origin: 10% 90%;
            rotate: 0deg;
            animation: tilt2 1s forwards;
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