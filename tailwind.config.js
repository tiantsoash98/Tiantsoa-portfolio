/** @type {import('tailwindcss').Config} */
export default {
    content: [],
    theme: {
      extend: {
        screens: {
            '3xl': '1792px',
        },
        container: {
            center: true,
            padding: {
                DEFAULT: '2rem',
                sm: '3vw'
            }
        },
        colors: {
            'earth': '#ed5d2f',
            'neutral': {
                50: "#F3F3F3",
                100: "#E7E7E7",
                150: "#DBDBDB",
                200: "#D0D0D0",
                300: "#B8B8B8",
                400: "#A0A0A0",
                500: "#898989",
                600: "#717171",
                700: "#595959",
                800: "#414141",
                900: "#2A2A2A",
                950: "#121212",
            }
        },
        fontFamily: {
            'neue-montreal': ['"Neue Montreal"', 'system-ui', 'Roboto']
        },
        fontSize: {
            /* Footnote text */
            'xs': ['0.88rem', {
                lineHeight: '1.5',
                letterSpacing: '-0em',
                fontWeight: '400',
            }],
            /* Callout text */
            'sm': ['0.95rem', {
                lineHeight: '1.5',
                letterSpacing: '-0em',
                fontWeight: '400',
            }],
          /* Paragraph */
            'base': ['1.25rem', {
                lineHeight: '1.5',
                letterSpacing: '0.015em',
                fontWeight: '400',
            }],
          /* H6 */
            'lg': ['1.33rem', {
                lineHeight: '1.5',
                letterSpacing: '0em',
                fontWeight: '400',
            }],
            /* H5 */
            'xl': ['1.77rem', {
                lineHeight: '1.3',
                letterSpacing: '-0em',
                fontWeight: '400',
            }],
            /* H4 */
            '2xl': ['2.44rem', {
                lineHeight: '1.3',
                letterSpacing: '0em',
                fontWeight: '400',
            }],
            /* H3 */
            '3xl': ['3.1rem', {
                lineHeight: '1.3',
                letterSpacing: '-0.02em',
                fontWeight: '400',
            }],
            /* H2 */
            '4xl': ['4.22rem', {
                lineHeight: '1.1',
                letterSpacing: '-0.02em',
                fontWeight: '400',
            }],
            /* H1 */
            '5xl': ['5.5rem', {
                lineHeight: '1',
                letterSpacing: '-0.03em',
                fontWeight: '400',
            }],
        }
      },
    },
    plugins: [],
  }
  
  