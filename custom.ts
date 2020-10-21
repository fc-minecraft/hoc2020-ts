enum fenceChooser {
    //% blockIdentity="blocks.block" enumval=85 block="Oak Fence"
    //% jres alias=OAK_FENCE
    OakFence = 85,
    //% blockIdentity="blocks.block" enumval=65621 block="Spruce Fence"
    //% jres alias=SPRUCE_FENCE
    SpruceFence = 65621,
    //% blockIdentity="blocks.block" enumval=131157 block="Birch Fence"
    //% jres alias=BIRCH_FENCE
    BirchFence = 131157,
    //% blockIdentity="blocks.block" enumval=196693 block="Jungle Fence"
    //% jres alias=JUNGLE_FENCE
    JungleFence = 196693,
    //% blockIdentity="blocks.block" enumval=262229 block="Acacia Fence"
    //% jres alias=ACACIA_FENCE
    AcaciaFence = 262229,
    //% blockIdentity="blocks.block" enumval=327765 block="Dark Oak Fence"
    //% jres alias=DARK_OAK_FENCE
    DarkOakFence = 327765    
}

//%  block="HOC 2020" weight=200 color=#00a513
namespace hoc2020 {

    /**
     * Agent Interact Forward
     */
    //% block="flip lever 2"
    export function flipLever() {
        agent.interact(FORWARD)
    }

    /**
     * Agent Place Fence
     */
    //% block="place fence type %block %n blocks forward"
    export function buildFence(block: fenceChooser, n: number): void{
        for (let i = 0; i < n; i++){

            agent.move(FORWARD, 1);
            agent.setItem(block, 1, 1)
            agent.setSlot(1)
            
            agent.place(BACK);
        }
    }   

}
