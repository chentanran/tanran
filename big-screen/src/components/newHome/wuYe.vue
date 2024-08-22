<template>
  <div class="newHome">
    <a-row :gutter="16">
      <a-col :span="8">
        <div class="newHome-box">
          <div class="newHome-box-title">快捷导航</div>
          <div class="newHome-box-center">
            <QuickNavigation />
          </div>
        </div>
      </a-col>
      <a-col :span="8">
        <div class="newHome-box">
          <div class="newHome-box-title">租赁分析</div>
          <div class="newHome-box-center">
            <LeaseAnalysis />
          </div>
        </div>
      </a-col>
      <a-col :span="8">
        <div class="newHome-box">
          <div class="newHome-box-title">工单分析</div>
          <div class="newHome-box-center">
            <WorkorderAnalysis />
          </div>
        </div>
      </a-col>
    </a-row>
    <a-row :gutter="16">
      <a-col :span="8">
        <div class="newHome-box">
          <div class="newHome-box-title">代办中心</div>
          <div class="newHome-box-center">
            <AgencyCenter />
          </div>
        </div>
      </a-col>
      <a-col :span="8">
        <div class="newHome-box">
          <div class="newHome-box-title">任务数量</div>
          <div class="newHome-box-center">
            <NumberTasks />
          </div>
        </div>
      </a-col>
      <a-col :span="8">
        <div class="newHome-box">
          <div class="newHome-box-title">客户分析</div>
          <div class="newHome-box-center">
            <CustomerAnalysis />
          </div>
        </div>
      </a-col>
    </a-row>
    <a-row :gutter="16">
      <a-col :span="8">
        <div class="newHome-box">
          <div class="newHome-box-title">通知公告</div>
          <div class="newHome-box-center">
            <Notice />
          </div>
        </div>
      </a-col>
      <a-col :span="16">
        <div class="newHome-box">
          <div class="newHome-box-title">到期分布</div>
          <div class="newHome-box-center">
            <StageDistribution />
          </div>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import QuickNavigation from './component/quickNavigation'
import AgencyCenter from './component/agencyCenter'
import LeaseAnalysis from './component/leaseAnalysis'
import WorkorderAnalysis from './component/workorderAnalysis'
import StageDistribution from './component/stageDistribution'
import NumberTasks from './component/numberTasks'
import CustomerAnalysis from './component/customerAnalysis'
import Notice from './component/noticeBox'

export default {
  components: {
    QuickNavigation,
    AgencyCenter,
    LeaseAnalysis,
    WorkorderAnalysis,
    StageDistribution,
    NumberTasks,
    CustomerAnalysis,
    Notice
  },
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
.newHome {
  height: 100%;
  width: 100%;
  padding: 10px !important;
  background-image: url(../../assets/homezs/bg.png);
  background-size: 100% 100%;

  /deep/.ant-row {
    height: 32%;
    margin-bottom: 1%;
    &:last-child{
      margin-bottom: 0%;
    }
    .ant-col {
      height: 100%;
    }
  }

  &-box {
    height: 100%;
    width: 100%;
    background-image: url(../../assets/homezs/box1.png);
    background-size: 100% 100%;
    &:last-child{
      background-image: url(../../assets/homezs/box2.png);
    }

    &-title {
      font-size: 0.9vw;
      color: #BCD6F3;
      line-height: 0.9vw;
      background: linear-gradient(0deg, #BCD6F3 0%, #E4F2FF 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      padding-top: 1vh;
      padding-left: 1vw;
    }

    &-center {
      height: calc(100% - 0.9vw - 1vh);
    }
  }
}

// 美化滚动条
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

::-webkit-scrollbar-corner {
  background: #1a2e4c;
}

::-webkit-scrollbar-track {
  width: 6px;
  background: #1a2e4c;
  -webkit-border-radius: 2em;
  -moz-border-radius: 2em;
  border-radius: 2em;
}

::-webkit-scrollbar-thumb {
  background-color: #1e3b67;
  background-clip: padding-box;
  min-height: 28px;
  -webkit-border-radius: 2em;
  -moz-border-radius: 2em;
  border-radius: 2em;
  transition: background-color .3s;
  cursor: pointer;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #1e3b67;
}
</style>