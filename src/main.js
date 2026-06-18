import DefaultLayout from '~/layouts/Default.vue'
import * as VueGoogleMaps from "vue2-google-maps"
import '~/styles/index.sass'

require('typeface-open-sans')



export default function (Vue) {
    Vue.component('Layout', DefaultLayout)

    const googleMapsApiKey = process.env.GRIDSOME_GOOGLE_MAPS_API_KEY

    if (googleMapsApiKey) {
        Vue.use(VueGoogleMaps, {
            load: {
                key: googleMapsApiKey,
                libraries: "places" // necessary for places input
            }
        });
    }
}
