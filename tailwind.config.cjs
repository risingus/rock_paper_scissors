/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{tsx, ts}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },

      colors: {

        tesoura: {
          gradient1: 'hsl(39, 89%, 49%)',
          gradient2: 'hsl(40, 84%, 53%)',
        },

        papel: {
          gradient1: 'hsl(230, 89%, 62%)',
          gradient2: 'hsl(230, 89%, 65%)'
        },

        pedra: {
          gradient1: 'hsl(349, 71%, 52%)',
          gradient2: 'hsl(349, 70%, 56%)',
        },

        lagarto: {
          gradient1: 'hsl(261, 73%, 60%)',
          gradient2: 'hsl(261, 72%, 63%)',
        },

        spock: {
          gradient1: 'hsl(189, 59%, 53%)',
          gradient2: 'hsl(189, 58%, 57%)'
        },

        text: 'hsl(229, 25%, 31%)',
        score: 'hsl(229, 64%, 46%)',
        headerOutline: 'hsl(217, 16%, 45%)',

        background: {
          gradient1: 'hsl(214, 47%, 23%)',
          gradient2: 'hsl(237, 49%, 15%)',
        },
      },

      fontFamily: {
        barlow: ['Barlow', 'sans-serif']
      },

      fontSize: {
        '4.5xl': '2.5rem'
      },

      boxShadow: {
        tesouraButton: '0px 5px hsl(28, 65%, 50%)',
        papelButton: '0px 5px hsl(230, 89%, 58%)',
        pedraButton: '0px 5px hsl(349, 70%, 30%)',
        spockButton: '0px 5px hsl(189, 58%, 40%)',
        lagartoButton: '0px 5px hsl(261, 72%, 50%)',
        optionButtonInnerShadow: 'inset 0px 6px hsl(217, 16%, 85%)',
      },

      keyframes: {

        scaleOption: {
          'from': {
            transform: 'scale(0)'
          },

          'to': {
            transform: 'scale(1)'
          }
        },

        pulseWinner: {

          '0%': {
            boxShadow: `
              0px 0px 1px 0px rgba(238, 238, 238, .05)
            `
          },


          '20%': {
            boxShadow: `
              0px 0px 1px 22px rgba(238, 238, 238, .05),
              0px 0px 1px 0px rgba(238, 238, 238, .05)
            `
          },


          '40%': {
            boxShadow: `
            0px 0px 1px 48px rgba(238, 238, 238, .05),
            0px 0px 1px 22px rgba(238, 238, 238, .05),
            0px 0px 1px 0px rgba(238, 238, 238, .05)
            `
          },


          '60%': {
            boxShadow: `
              0px 0px 1px 78px rgba(238, 238, 238, .05),
              0px 0px 1px 48px rgba(238, 238, 238, .05),
              0px 0px 1px 22px rgba(238, 238, 238, .05),
              0px 0px 1px 0px rgba(238, 238, 238, .05)
            `
          },

          '80%': {
            boxShadow: `
              0px 0px 1px 98px rgba(238, 238, 238, .05),
              0px 0px 1px 68px rgba(238, 238, 238, .05),
              0px 0px 1px 42px rgba(238, 238, 238, .05),
              0px 0px 1px 0px rgba(238, 238, 238, .05)
            `
          },

          '100%': {
            boxShadow: `
            0px 0px 1px 78px rgba(238, 238, 238, .05),
            0px 0px 1px 48px rgba(238, 238, 238, .05),
            0px 0px 1px 22px rgba(238, 238, 238, .05)
            `
          },
        },

        pulseWinnerLarge: {

          '0%': {
            boxShadow: `
              0px 0px 1px 0px rgba(238, 238, 238, .05)
            `
          },


          '20%': {
            boxShadow: `
              0px 0px 1px 42px rgba(238, 238, 238, .05),
              0px 0px 1px 0px rgba(238, 238, 238, .05)
            `
          },


          '40%': {
            boxShadow: `
            0px 0px 1px 88px rgba(238, 238, 238, .05),
            0px 0px 1px 42px rgba(238, 238, 238, .05),
            0px 0px 1px 0px rgba(238, 238, 238, .05)
            `
          },


          '60%': {
            boxShadow: `
              0px 0px 1px 128px rgba(238, 238, 238, .05),
              0px 0px 1px 88px rgba(238, 238, 238, .05),
              0px 0px 1px 42px rgba(238, 238, 238, .05),
              0px 0px 1px 0px rgba(238, 238, 238, .05)
            `
          },

          '80%': {
            boxShadow: `
              0px 0px 1px 148px rgba(238, 238, 238, .05),
              0px 0px 1px 108px rgba(238, 238, 238, .05),
              0px 0px 1px 62px rgba(238, 238, 238, .05),
              0px 0px 1px 0px rgba(238, 238, 238, .05)
            `
          },


          '100%': {
            boxShadow: `
            0px 0px 1px 128px rgba(238, 238, 238, .05),
            0px 0px 1px 88px rgba(238, 238, 238, .05),
            0px 0px 1px 42px rgba(238, 238, 238, .05)
            `
          },
        },
      },

      animation: {
        pulse: 'pulseWinner 0.5s cubic-bezier(1,1.05,1,1) forwards',
        pulseLarge: 'pulseWinnerLarge 0.5s cubic-bezier(1,1.05,1,1) forwards',
        scale: 'scaleOption 0.4s cubic-bezier(1,1.05,1,1) forwards'
      },

      screens: {
        xs: '374px',
      }

    },
  },
  plugins: [],
}
