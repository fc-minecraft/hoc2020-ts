//%  block="HOC 2020" weight=200 color=#00a513
namespace hoc2020 {

    /**
     * Agent Interact Forward
     */
    //% block="flip lever"
    export function flipLever() {
        agent.interact(FORWARD);
    }

    /**
     * Agent Place Fence
     */
    //% block="place fence"
    export function buildFence() {
        agent.move(FORWARD, 1);
    }

}