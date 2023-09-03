<template>
    <div class="regsucWrap">
        <div class="regsucPic">
            <img src="https://picsum.photos/500/800/?random=15">
        </div>
        <div class="regsucText">
            <div class="regsucIcon">
                <i class="fa-solid fa-circle-check"></i>
                <p>會員註冊成功</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
}
</script>

<style lang="scss">
.regsucWrap {
    // border: 1px solid red;
    width: 1200px;
    margin: auto;
    display: flex;
    justify-content: center;
    // align-items: center;

    .regsucPic {
        // border: 1px solid #aaa;
        position: relative;
        left: 50px;
        border-radius: 20px;

        img {
            width: 100%;
            vertical-align: bottom;
            border-radius: 20px;
        }
    }

    .regsucText {
        border: 1px solid #aaa;
        width: 500px;
        background-color: #fff;
        border-radius: 20px;
        position: relative;
        right: 50px;

        .regsucIcon {
            // border: 1px solid red;
            margin-top: 70%;
            font-size: 24px;

            i {
                scale: 5;
                // border: 1px solid red;
                // margin-bottom: 100px;
                // font-size: 40px;
            }

            p {
                margin-top: 100px;
                // border: 1px solid red;
            }
        }
    }

}

@media screen and (max-width:414px) {
    .regsucWrap {
        width: 100%;
        flex-direction: column;

        .regsucPic {
            left: 0;
            top: 20px;

            // height: 200px;
            img {
                height: 200px;
                width: 100%;
            }
        }

        .regsucText {
            right: 0;
            bottom: 20px;
            width: 100%;
            padding-bottom: 150px;
        }
    }
}
</style>