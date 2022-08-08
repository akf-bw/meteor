import SwEmailField from './sw-email-field.vue';
import baseFieldArgTypes from '../_internal/sw-base-field/arg-types';

export default {
  title: 'Components/Form/sw-email-field',
  component: SwEmailField,
  argTypes: {
    ...baseFieldArgTypes
  },
  args: {
    label: 'Emailfield',
  },
};

const Template = (args, { argTypes }) => ({
  template: `
    <div>
      <sw-email-field
          v-bind="$props"
          v-model="currentValue"
          @input="input"
          @change="change"
          @inheritance-remove="inheritanceRemoveWrapper"
          @inheritance-restore="inheritanceRestoreWrapper">
        <template
            v-if="$props.prefix"
            #prefix>
          {{prefix}}
        </template>
  
        <template
            v-if="$props.suffix"
            #suffix>
          {{suffix}}
        </template>
  
        <template
            v-if="$props.hint"
            #hint>
          {{hint}}
        </template>
      </sw-email-field>
      
      <!-- Helper element to loose focus -->
      <h4 style="display: none;">hidden</h4>
    </div>`,
  props: Object.keys(argTypes),
  components: { SwEmailField },
  data() {
    return { currentValue: '' }
  },
  watch: {
    value(v) {
      if (this.currentValue === v) {
        return;
      }

      this.currentValue = v;
    }
  },
  created() {
    this.currentValue = this.value;
  },
  methods: {
    inheritanceRemoveWrapper() {
      this.inheritanceRemove(...arguments);
      this.isInherited = false;
    },

    inheritanceRestoreWrapper() {
      this.inheritanceRestore(...arguments);
      this.isInherited = true;
    }
  }
});

export const Default = Template.bind({});
Default.storyName = 'sw-email-field';
