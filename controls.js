window.addEventListener( 'keydown', event =>
{
    switch ( event.key )
    {
        case player.down.key:
            player.down.pressed = true
            break;
        case player.left.key:
            player.left.pressed = true
            break;
        case player.right.key:
            player.right.pressed = true
            break;
        case ' ':
            player.shoot = true
            break;
    }
}
)
window.addEventListener( 'keyup', event =>
{
    switch ( event.key )
    {
        case player.up.key:
            player.up.pressed = true
            player.jump = true
            break;
        case player.down.key:
            player.down.pressed = false
            break;
        case player.left.key:
            player.left.pressed = false
            break;
        case player.right.key:
            player.right.pressed = false
            break;
        case ' ':
            player.shoot = false
            break;
    }
}
)