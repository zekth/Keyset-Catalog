import { Vue, Component, Prop } from 'vue-property-decorator';
import tinycolor from 'tinycolor2';
import { genKeyData } from './keys';
@Component
export class KeyboardLayout extends Vue {
  @Prop()
  keyset;
  @Prop()
  keyboardColor;

  char = '&';
  doubleQuote = '"';
  simpleQuote = "'";

  get keyboardGradientStart() {
    return tinycolor(this.keyboardColor)
      .darken(5)
      .toString();
  }
  get keyboardGradientEnd() {
    return tinycolor(this.keyboardColor)
      .lighten(5)
      .toString();
  }
  getKeyData(key, baseColors, content, subContent, thirdContent) {
    return genKeyData(
      this.keyset,
      key,
      baseColors,
      content,
      subContent,
      thirdContent
    );
  }
}
