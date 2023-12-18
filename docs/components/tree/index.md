# 树🌲

:::demo

  ```vue
  <template>
    <STree :data="data" />
  </template>


  <script setup>
    import {ref} from 'vue'
    const data = ref([
      {
        label:'docs',
        id:'docs',
        level:1
      },
      {
        label:'packages',
        id:'packages',
        expanded:true,
        children:[
          {
            label:'plugin-vue',
            id:'plugin-vue',
            expanded:true,
            children:[
              {
                label:'packages2',
                id:'packages3',
                expanded:false,
              }
            ]
          }
        ]
      },
      {
        label:'cli',
        id:'cli',
        expanded:false,
      },
      {
        label:'lib',
        id:'lib',
        expanded:false,
      }
    ])
  </script>
  ```
