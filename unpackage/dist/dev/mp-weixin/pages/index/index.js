"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const count = common_vendor.ref(0);
    let data = common_vendor.ref([{ value: 5 }, { value: 2 }, { value: 3 }, { value: 4 }]);
    function increment() {
      count.value++;
      const db = common_vendor.wx$1.cloud.database();
      const infos = db.collection("info");
      infos.get().then((res) => {
        console.log(res.data);
        data.value = res.data;
      });
      console.log("-------", data.value);
    }
    common_vendor.onMounted(() => {
      console.log(`The initial count is ${count.value}.`);
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(common_vendor.unref(data)[0].name),
        b: common_vendor.t(count.value),
        c: common_vendor.o(increment)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/suqi/Documents/HBuilderProjects/WxLose/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
