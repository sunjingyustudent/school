<template>
  <div>
    <header slot="header" class="v-head">
      <div slot="title">pulldown and pullup</div>
    </header>
    <section slot="body" :scroll="false" class="demos flow-demos">
      <flow-box @on-pullup="pullupHandler" @on-pulldown="pulldownHandler" :loading="loading" :end="end" :starts="starts">
        <template v-for="item in list">
          <div class="flow-item flexbox">
            <div class="avator v-img-wrapper v-img-placeholder">
              <img class="avator" :src="item.author.avatar_url" />
            </div>
            <div class="flexbox-item">
              <h4>{{item.title}}</h4>
              <div>
                {{new Date().toLocaleString()}}
              </div>
            </div>
          </div>
        </template>
      </flow-box>
    </section>
  </div>
</template>
<style>
*{margin:0;padding:0;}
body{
    overflow-y: hidden;
}
.v-head {
    color: #fff;
    background-color: #3399ff;
    height: 2.4rem;
    line-height: 2.4rem;
    text-align: center;
}

.flow-item {
    padding: 8px;
    margin: 5px 0;
    border-bottom: 1px solid #d7dde4;
}

.avator {
    width: 50px;
    height: 50px;
    margin-right: 6px;
    border-radius: 3px;
}

.v-img-placeholder {
    background: #f5f5f5;
}

.v-img-wrapper {
    vertical-align: middle;
    font-size: 0;
    position: relative;
    overflow: hidden;
}

.v-img-wrapper img {
    min-height: 20px;
    min-width: 20px;
    max-width: 100%;
    max-height: 100%;
    border-radius: inherit;
    background-color: inherit;
}

.flexbox-item {
    -ms-flex: 1;
    -webkit-box-flex: 1;
    -moz-box-flex: 1;
    -webkit-flex: 1;
    -moz-flex: 1;
    flex: 1;
    min-width: 0;
    font-size: .6rem;
    width: 12rem;
    word-break:break-all;
    display:-webkit-box;
    -webkit-line-clamp:2;
    -webkit-box-orient:vertical;
    overflow:hidden;
}

.flexbox {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: -moz-flex;
    display: flex;
}
.flow-demos .v-flow {
    height: 100%;
    background: #fff;
    position: absolute;
    width: 100%;
}

.flow-demos {
  .avator {
    width: 50px;
    height: 50px;
    margin-right: 6px;
    border-radius: 3px;
  }
  .flow-item {
    padding: 6px
  }
  h4 {
    margin: 0;
    overflow: hidden;
  }
}
</style>
<script>
import FlowBox from '../components/flow';

import api from '../util/sorcll'

let lastPage = 1
export default {
    components: {
        FlowBox
    },
    mounted() {
        this.fetch()
    },
    methods: {
    pullupHandler(e) {
        this.fetch(lastPage + 1);
        this.starts= true
    },
    pulldownHandler(e) {
        this.fetch(1)
        lastPage =1
        this.end = false
        this.starts= true
    },
    fetch(page = 1, cb) {

        let bool = page > lastPage
        if (bool) {
            lastPage = page
        }
        this.loading = true;
        api.cnode.list({ page: page, tab: '' }).then((data) => {
            this.loading = false
            if(page===1){
                this.list =[]
            }
            if (bool) {
                this.list = this.list.concat(data.data)
            } else {
                this.list = data.data.concat(this.list)
            }
            if (page > 2 && !this.end) {
                this.end = true
            }
            cb && cb()
        })
    }
    },
    data() {
        return {
            list: [],
            loading: true,
            end: false,
            starts:true
        }
    }
}

</script>
