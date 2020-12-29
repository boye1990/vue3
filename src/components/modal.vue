<template>
<teleport to='#modal'>
    <div class="modalBox" v-show="isShowModal">
        <div class="modal">
            <div class="content"><slot>显示提示框</slot></div>
            <div class="closeModal" @click.stop="buttonClik">close</div>
        </div>
    </div>
</teleport>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
    props: {
        isShowModal: {
            type: Boolean,
            default: false
        }
    },
    emits: {
        'close_modale': null
    },
    setup(props, context) {

        const buttonClik = () => {
            console.log('关闭')
            context.emit('close_modale')
        }


        return {
            buttonClik
        }
    }
})
</script>

<style scoped>
    .modal {
        position: absolute;
        left: 50%;
        padding: 50px;
        box-sizing: border-box;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 300px;
        height: 300px;
        background: #eee487;
        border-radius: 15px;
    }
    .content {
        text-align: center;
        font-size: 24px;
    }
    .closeModal {
        position: absolute;
        bottom: 50px;
        left: 50%;
        transform: translateX(-50%);
        width: 80px;
        height: 30px;
        border-radius: 15px;
        background-color: cornflowerblue;
        line-height: 30px;
        font-weight: 700;
        cursor: pointer;
        text-align: center;
    }
    .modalBox {
        position: fixed;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.6);
        top: 0;
        left: 0;
    }
</style>