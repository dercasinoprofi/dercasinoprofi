export { default as Game } from '../../components/Game.vue'
export { default as CardsCard } from '../../components/cards/Card.vue'
export { default as CardsGroup } from '../../components/cards/Group.vue'
export { default as CardsHorizontal } from '../../components/cards/Horizontal.vue'
export { default as CustomFeatureLinks } from '../../components/custom/FeatureLinks.vue'
export { default as CustomStartpageText } from '../../components/custom/StartpageText.vue'
export { default as CustomTopCasinos } from '../../components/custom/TopCasinos.vue'
export { default as Footer } from '../../components/footer/Footer.vue'
export { default as NavbarHeaderLogo } from '../../components/navbar/HeaderLogo.vue'
export { default as NavbarHeaderStandard } from '../../components/navbar/HeaderStandard.vue'
export { default as SliderHeaderSliderControls } from '../../components/slider/HeaderSliderControls.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
