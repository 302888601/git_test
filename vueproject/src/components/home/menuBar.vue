<template>
  <div id="menu">
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      background-color="#232242"
      text-color="#fff"
      active-text-color="#fac926"
    >
      <template v-for="(item,index) in menuList">
        <el-submenu :key="index + '_level1'" :index="(index + 1) + ''">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>{{item.title}}</span>
          </template>
          <el-menu-item-group>
            <template v-for="(value,i) in item.children">
              <el-menu-item :key="i + '_level2'" :index="(index + 1) + '-' + (i + 1)" @click="changeView(value.id)">{{value.name}}</el-menu-item>
            </template>
          </el-menu-item-group>
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>

<script>
import menuList from '../../common/menulist.json'
export default {
  name: "MenuBar",
  data () {
    return {
      menuList: []
    }
  },
  mounted () {
    if (!localStorage.getItem('menuList')) {
      this.menuList = menuList
      localStorage.setItem('menuList', JSON.stringify(menuList))
    } else {
      let oldMenu = JSON.parse(localStorage.getItem('menuList'))
      let newMenu = menuList
      if (newMenu.length == oldMenu.length) {
        oldMenu.map((item,index) => {
          newMenu.map((value,i) => {
            if (index == i) {
              this.menuList = this.isObjectValueEqual(item,value) ? oldMenu : newMenu
            }
          })
        })
      } else {
        this.menuList = newMenu
      }
    }
  },
  methods: {
    // 跳转路由
    changeView(path) {
      this.$router.push({path: '/home/littleGame/' + path})
    },
    // 缓存/获取左侧菜单
    isObjectValueEqual(a, b) {
      var aProps = Object.getOwnPropertyNames(a)
      var bProps = Object.getOwnPropertyNames(b)
      if (aProps.length != bProps.length) {
          localStorage.setItem('menuList', JSON.stringify(menuList))
          return false
      }
      for (var i = 0; i < aProps.length; i++) {
        var propName = aProps[i]
        var propA = a[propName]
        var propB = b[propName]
        if ((propA instanceof Object)) {
          if (this.isObjectValueEqual(propA, propB)) {
            return true
          } else {
            localStorage.setItem('menuList', JSON.stringify(menuList))
            return false
          }
        } else if ((propA instanceof Array)) {
          if (propA.length == propB.length) {
            for (var x = 0; x < propA.length; x++) {
              for (var y = 0; y < propB.length; y++) {
                if (x == y) {
                  if (this.isObjectValueEqual(propA[x], propB[y])) {
                    return true
                  } else {
                    localStorage.setItem('menuList', JSON.stringify(menuList))
                    return false
                  }
                }
              }
            }
          } else {
            localStorage.setItem('menuList', JSON.stringify(menuList))
            return false
          }
        } else if (propA !== propB) {
          localStorage.setItem('menuList', JSON.stringify(menuList))
          return false
        }
      }
      return true
    },
  },
  components: {}
}
</script>

<style lang="scss" scoped>
  #menu {
    height: 100%;
    .el-menu {
      border: 1px solid #232242;
    }
  }
</style>