<script>
    let bxW;
    let bxH;
    let path;
    let pTotalLen;
    let wraparound = false;

    // $: if (path){
    //     console.log(path.getTotalLength());
    // }
    // stroke-dasharray: {pTotalLen}; stroke-dashoffset: {pTotalLen};

    $: if (bxW){
        console.log(bxW);
        if (path){
            pTotalLen = path.getTotalLength();
            wraparound = true;
            console.log(pTotalLen);
        }
        // console.log(path?.getTotalLength());
    }
</script>

<div class="border" bind:clientWidth={bxW} bind:clientHeight={bxH}>
    <div class="content">
        <h1>Title goes here</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum ea qui voluptatem ab vero, ex neque odit sed mollitia nam ad quaerat accusamus aliquid amet perspiciatis modi cumque cupiditate recusandae at molestias tenetur numquam reiciendis enim ipsa. Nobis exercitationem quidem modi iusto qui iste fuga quibusdam repellat corporis odio. Quod, aliquam rerum, molestias commodi rem veritatis perferendis delectus sed corporis voluptas esse eaque fugit dolore illum. Eligendi exercitationem enim aliquam unde beatae a eum velit quibusdam numquam deleniti sunt eveniet rem explicabo reprehenderit repellat, error, consequatur at corporis repudiandae maiores illum perferendis placeat veniam libero. Itaque ab excepturi fugiat temporibus.</p>
    </div>
    {#if bxH}
        <svg id="bx">
            <!-- <path class:wraparound id="path" bind:this={path} d="M 1 1 H {bxW - 1} V {bxH - 1} H 1 L 1 1"  -->
            <rect class:wraparound id="path" bind:this={path} x="2" y="2" width={bxW - 3} height={bxH - 3} rx="10" ry="10"
            style="fill: none; stroke: #225599; stroke-width: 4;stroke-dasharray: {pTotalLen}; stroke-dashoffset: {pTotalLen};"/>
        </svg>
    {/if}
</div>

<style>
    .border {
        position: relative;
        width: 300px;
        background-color: var(--color-1);
        margin: auto;
        border-radius: 10px;
    }
    .content {
        padding: 1em;
    }
    p {
        padding: 1em;
    }

    #bx {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        /* z-index: -1; */
    }

    .wraparound {
        animation: wrap 1s linear forwards;
    }

    @keyframes wrap {
        0% { stroke-dashoffset: 1810 }
        100% { stroke-dashoffset: 0;}
    }

    @media screen and (min-width: 600px){
        .border {
            position: relative;
            width: 450px;
            background: transparent;
            background-color: var(--color-1);
            /* margin: 4em auto;
            border-radius: 10px; */
        }
    }
</style>