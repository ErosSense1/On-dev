/** @type {HTMLCanvasElement} */

const canvas = document.getElementById( 'canvas' );
const c = canvas.getContext( '2d' );

const CANVAS_WIDTH = canvas.width = 1000
const CANVAS_HEIGHT = canvas.height = 500

const q = document.getElementById( 'txt' );

let Q = {
    pressed: false
}

let shoot = false

let player = new Player( CANVAS_WIDTH / 2, CANVAS_HEIGHT)

function objFuncs ( ctx, object, func = new String() )
{
    if ( func === 'draw' ) object.draw( ctx )
    else if ( func === 'update' ) object.update( ctx )
    else if ( func === 'controls' ) object.controls()
}


let timeoutCountQ
let timeoutQ
let cdQ = 10
let countQ = 10
let final_countQ

function game ()
{
    requestAnimationFrame( game )
    c.fillStyle = "white"
    c.fillRect( 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT )

    objFuncs( c, player, 'controls' )
    objFuncs( c, player, 'update' )

    window.addEventListener( 'keydown', e =>
    {
        switch ( e.key )
        {
            case 'q':
                Q.pressed = true
                break;
            case ' ':
                shoot = true
                break;
        }
    } )
    window.addEventListener( 'keyup', e =>
    {
        if ( e.key == ' ' )
        {
            shoot = false
        }
    } )

    final_countQ = Math.floor( countQ )
    q.innerText = final_countQ
    if ( Q.pressed )
    {
        timeoutQ = setTimeout( () =>
        {
            countQ -= 1 / 60
        }, 1000 )
    }

    if ( countQ <= 1 )
    {
        Q.pressed = false
        countQ = 11
    }

    if ( shoot )
    {

    }



}
document.addEventListener( 'mousemove', e =>
{
    let x = e.pageX;
    let y = e.pageY;

    cursor.style.left = x + 'px';
    cursor.style.top = y + 'px';

    cursor.style.display = 'block'

} )
document.addEventListener( 'mouseout', () =>
{
    cursor.style.display = 'none'
} )


window.onload = game