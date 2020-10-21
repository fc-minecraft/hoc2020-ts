// enums
enum Direction {
    //% block="forward"
    Forward,
    //% block="back"
    Back,
    //% block="left"
    Left,
    //% block="right"
    Right
}

// global variables
const directions = [
    FORWARD,
    BACK,
    LEFT,
    RIGHT
];

const turns = [
    LEFT_TURN,
    RIGHT_TURN
]

//%  block="HOC 2020" weight=200 color=#00a513
namespace hoc2020 {

    /**
     * Agent Interact Forward
     */
    //% block="toggle lever"
    export function flipLever() {
        agent.interact(FORWARD)
    }

    /**
     * Agent Place Fence
     */
    //% block="move and place fence %n times"
    export function buildFence(n: number): void{
        for (let i = 0; i < n; i++){

            agent.move(FORWARD, 1)
            agent.setItem(OAK_FENCE, 1, 1)
            agent.setSlot(1)
            
            agent.place(BACK)
        }
    }   

    /**
     * Agent place soil
     */
    //% block="prepare soil and move %n times"
    export function tillSoil(n: number): void{
        for (let i = 0; i < n; i++){
            agent.destroy(DOWN)

            agent.setItem(DIRT, 1, 1)
            agent.place(DOWN)

            agent.move(FORWARD, 1)

            agent.till(BACK)
        }
    }      
    /**
     * Agent place wood down
     */
    //% block="move and place wood %n times"
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
    //% block="place rail and move %n times"
    export function placeRails(n: number): void{

        for (let i = 0; i < n; i++){
            agent.setItem(RAIL, 1, 1)
            agent.place(DOWN)

            agent.move(FORWARD, 1)
        }        
    }        

    /**
     * Agent move forward with pause
     */
    //% block="lead ravager %n forward"
    export function leadRavager(n: number): void{

        for (let i = 0; i < n; i++){
            agent.move(FORWARD,1)
            loops.pause(500)
        }        
    }    

    /**
     * Agent move
     */
    //% block="agent move %d by %n"
    export function moveAgent(d: Direction, n: number): void{

        for (let i = 0; i < n; i++){

            const direction = directions[d];

            agent.move(direction,1)
        }        
    }     

    /**
     * Agent move up
     */
    //% block="agent climb %n up"
    export function agentClimb(n: number): void{

        for (let i = 0; i < n; i++){
            agent.move(UP,1)
        }        
    }                         

    /**
     * Give player sappling
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
     * Give player sappling
     */
    //% block="turn agent %t"
    export function turnAgent(t: TurnDirection): void{
        const turn = turns[t];

        agent.turn(turn);
    }      

}
