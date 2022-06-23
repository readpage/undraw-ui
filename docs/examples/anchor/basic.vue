<template>
  <div class="view">
    <div class="ac">
      <div id="article" class="article">
        <h2>人和植物一样</h2>
        <p>对我来说，在地里种下一粒种子本身就是美好的。我总是带着喜悦和极大的敬畏去做这件事。</p>
        <h2>文明与野蛮</h2>
        <p>
          我们相信，人类社会会不断摒除野蛮，走向文明，因为绝大多数人向往文明，文明意味着尊重生命、维护人的尊严和自由、建立一种理性且科学的生活方式，让绝大多数人有安全感。人类历史正是因为人类对文明的追求与保护而顽强延续到今天，文明战胜野蛮，是必然的。
        </p>
        <h2>村庄的时间</h2>
        <p>
          当我十岁的时候站在我家后面的皂荚树下，我突然感到时间的停滞。我的视野里只有寂静的午后村庄，没有风，没有人，空气均匀地铺展在池塘的深绿色水面上。我在这种突如其来的空寂中不敢妄动，与此同时，心中涌起永恒的瞻望。我想我永远不会长大，鸭蹼状的宽大树叶也永遠不会扇动，而放眼望去，青砖平房、柴垛、洗衣石板都永远在这里，不会变动一分一毫。
        </p>
      </div>
    </div>
    <!-- container参数指定监听的容器 -->
    <div class="article-catalog">
      <u-anchor style="position: fixed" container="#article"></u-anchor>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.view {
  display: flex;

  .article-catalog {
    flex: 1;
    margin-left: 10px;
    .u-anchor {
      position: relative;
      width: inherit;
    }
  }
}
.article {
  width: 500px;
  p {
    margin: 20px 0;
    font-size: 16px;
    line-height: 32px;
    word-break: break-all;
    text-indent: 2em;
  }
}
</style>
