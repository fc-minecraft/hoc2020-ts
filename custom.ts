//%  block="HOC 2020" weight=200 color=#00a513
namespace hoc2020 {

    /**
     * Agent Interact Forward
     */
    //% block="flip lever"
    export function flipLever() {
        agent.interact(FORWARD)
    }

    /**
     * Agent Place Fence
     */
    //% block="place fence %n and move forward"
    export function buildFence(n: number): void{
        for (let i = 0; i < n; i++){

            agent.move(FORWARD, 1);
            agent.setItem(OAK_FENCE, 1, 1)
            agent.setSlot(1)
            
            agent.place(BACK);
        }
    }   

}
