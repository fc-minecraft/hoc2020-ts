//%  block="HOC 2020" weight=200 color=#d83b01
namespace hoc2020 {

    /**
     * Agent interact forward
     */
    //% block="переключить рычаг"
    export function flipLever() {
        agent.interact(FORWARD)
    }

    /**
     * Agent place Iron Bars
     */
    //% block="установить железные прутья вниз"
    export function placeFence() {
        agent.setItem(IRON_BARS, 1, 1)
        agent.place(DOWN)
    }

    /**
     * Agent till soil
     */
    //% block="вспахать и двигаться вперед %n раз"
    //% n.defl=1
    export function tillSoil(n: number): void{
        for (let i = 0; i < n; i++){
            agent.till(UP)
            player.execute(
                "execute @c ~ ~ ~ detect ~ ~-1 ~ dirt 0 setblock ~ ~-1 ~ farmland 2"
            )
            agent.move(FORWARD,1)
        }
    }

    /**
     * Agent place wood down
     */
    //% block="двигаться и устанавливать дерево %n раз"
    //% n.defl=1
    export function placePlanks(n: number): void{

        for (let i = 0; i < n; i++){
            agent.move(FORWARD, 1)

            agent.setItem(PLANKS_OAK, 1, 1)
            agent.place(DOWN)
        }
    }

    /**
     * Agent place rail down
     */
    //% block="установить рельс внизу"
    export function placeRails(){
        agent.setItem(RAIL, 1, 1)
        agent.place(DOWN)
    }

    /**
     * Lead ravager
     */
    //% block="вести опустошителя вперед %n раз"
    //% n.defl=1
    export function leadRavager(n: number): void{

        for (let i = 0; i < n; i++){
            agent.move(FORWARD,1)
            //loops.pause(200)
        }
    }

    /**
     * Agent move
     */
    //% block="движение агента %d на %n"
    //% n.defl=1
    export function moveAgent(d: SixDirection, n: number): void{
        for (let i = 0; i < n; i++){
            agent.move(d,1)
        }
    }

    /**
     * Agent move up
     */
    //% block="подъем агента %n вверх"
    //% n.defl=1
    export function agentClimb(n: number): void{

        for (let i = 0; i < n; i++){
            agent.move(UP,1)
        }
    }

    /**
     * Give player sapling
     */
    //% block="принять подарок"
    export function acceptGift(){
        mobs.give(
            mobs.target(LOCAL_PLAYER),
            OAK_SAPLING,
            1
        )
    }

    /**
     * Turn the Agent
     */
    //% block="повернуть агента %t"
    export function turnAgent(t: TurnDirection): void{
        agent.turn(t);
    }
}

//%  block="HOC 2020 Cont" weight=200 color=#569138
namespace hoc2020Different {

    /**
     * Repeat code the specified number of times
     */
    //% block="повторить $n раз"
    //% n.defl=2
    //% handlerStatement=1
    //% draggableParameters="reporter"
    export function customRepeatLoop(n: number, handler: () => void) {
        for (let i = 0; i < n; i++){
            handler();
        }
    }
}
