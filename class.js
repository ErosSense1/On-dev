class Player
{
    width = 50;
    height = 50;
    constructor ( x, y )
    {
        //position
        this.x = x;
        this.y = y;
        //speed
        this.sX = 0;
        this.sY = 0;
        //controls
        this.up =
        {
            key: 'w',
            pressed: false
        }
        this.down =
        {
            key: 's',
            pressed: false
        }
        this.left =
        {
            key: 'a',
            pressed: false
        }
        this.right =
        {
            key: 'd',
            pressed: false
        }

        this.jump = false
        this.shoot = false
    }
    draw ( c )
    {
        c.fillStyle = "black"
        c.fillRect( this.x, this.y, this.width, this.height )

        c.fillStyle = "red"
        c.fillRect( ( this.x + this.width ) - 37.5, ( this.y + this.height ) - 37.5, this.width / 2, this.height / 2 )
        c.fillStyle = "black"
    }
    update ( c )
    {
        this.draw( c )

        this.sY += 10;

        this.x += this.sX;
        this.y += this.sY;

        if ( this.x <= 0 )
        {
            this.x = 0
        }
        else if ( this.x + this.width >= CANVAS_WIDTH )
        {
            this.x = CANVAS_WIDTH - this.width
        }

        if ( this.y <= ( CANVAS_HEIGHT / 2 ) + 50 )
        {
            this.up.pressed = false
            this.sY += 20
        }
        else if ( this.y + this.height >= CANVAS_HEIGHT )
        {
            this.jump = false
            this.y = CANVAS_HEIGHT - this.height
        }

    }
    controls ( c )
    {
        if ( this.up.pressed )
        {
            if ( this.jump ) return
            else this.sY = -30
        }

        else if ( this.down.pressed )
        {
            this.sY = 5
        }
        else 
        {
            this.sY = 0
        }


        if ( this.right.pressed )
        {
            this.sX = 5
        }
        else if ( this.left.pressed )
        {
            this.sX = -5
        }
        else
        {
            this.sX = 0
        }
    }
}