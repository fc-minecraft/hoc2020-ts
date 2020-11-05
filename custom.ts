// global variables
const directions = [
    FORWARD,
    BACK,
    LEFT,
    RIGHT,
    UP,
    DOWN
];

const turns = [
    LEFT_TURN,
    RIGHT_TURN
]

//%  block="HOC 2020" weight=200 color=#d83b01
namespace hoc2020 {

    /**
     * Agent interact forward
     */
    //% block="toggle lever"
    export function flipLever() {
        agent.interact(FORWARD)
    }

    /**
     * Agent place Iron Bars
     */
    //% block="place iron bars down"
    export function placeFence() {
        agent.setItem(IRON_BARS, 1, 1)
        agent.place(DOWN)
    }   

    /**
     * Agent till soil
     */
    //% block="till and move forward %n times"
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
    //% block="move and place wood %n times"
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
    //% block="place rail below"
    export function placeRails(){
        agent.setItem(RAIL, 1, 1)
        agent.place(DOWN)
    }        

    /**
     * Lead ravager
     */
    //% block="lead ravager %n forward"
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
    //% block="agent move %d by %n"
    //% n.defl=1 
    export function moveAgent(d: SixDirection, n: number): void{

        for (let i = 0; i < n; i++){

            const direction = directions[d];

            agent.move(direction,1)
        }        
    }     

    /**
     * Agent move up
     */
    //% block="agent climb %n up"
    //% n.defl=1 
    export function agentClimb(n: number): void{

        for (let i = 0; i < n; i++){
            agent.move(UP,1)
        }        
    }                         

    /**
     * Give player sapling
     */
    //% block="accept gift"
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
    //% block="turn agent %t"
    export function turnAgent(t: TurnDirection): void{
        const turn = turns[t];

        agent.turn(turn);
    }      
}

//%  block="HOC 2020 Cont" weight=200 color=#569138
namespace hoc2020Different {

    /**
     * Repeat code the specified number of times
     */
    //% block="repeat $n times"
    //% n.defl=2
    //% handlerStatement=1
    //% draggableParameters="reporter"
    export function customRepeatLoop(n: number, handler: () => void) {
        for (let i = 0; i < n; i++){
            handler();
        }
    }
}
