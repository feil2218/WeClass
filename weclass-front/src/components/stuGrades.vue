<template>
  <el-table :data="filterTableData" border ref="mainTable" @selection-change="handleSelectionChange" style="width: 100%">
    <el-table-column type="selection" width="55" />
    <el-table-column label="OpenID" v-if="false" prop="openid" />
    <el-table-column label="学生姓名" prop="stuName" />
    <el-table-column label="课程" prop="courName" />
    <el-table-column label="学分" prop="courCredits" />
    <el-table-column label="成绩" prop="courGrades" />
    <el-table-column label="绩点" prop="courPoints" />
    <el-table-column label="操作" fixed="right">
      <template #default="scope">
        <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
          >编辑</el-button
        >
        <el-button
          size="small"
          type="danger"
          @click="handlePush(scope.$index, scope.row)"
          >推送成绩</el-button
        >
      </template>
    </el-table-column>
  </el-table>

</template>

<script setup>
import { computed, ref , reactive, onMounted} from 'vue'
import axios from 'axios'

const search = ref('')
const filterTableData = computed(() =>
  tableData.filter(
    (data) =>
      !search.value
  )
)
const handleEdit = (index, row) => {
  console.log(index, row)
}
const handlePush = (row) => {
  axios.post("http://127.0.0.1:5000/pushGrade").then(function(resp){
    console.log(resp);
  })
  console.log(row)
}
const multipleSelection = ref([])
const handleSelectionChange = (val) => {
  multipleSelection.value = val
  console.log(multipleSelection.value)
}


const tableData = [
  {
    openid: 'oDvH45zi9UblvXy1hKt3uR-ihpm8',
    stuName: '范东杰',
    courName: '计算机网络',
    courCredits: '5',
    courGrades: '80',
    courPoints: '3.75'
  },
  {
    openid: 'oDvH45zi9UblvXy1hKt3uR-ihpm8',
    stuName: '范东杰',
    courName: '操作系统',
    courCredits: '5',
    courGrades: '80',
    courPoints: '3.75'
  }
]

</script>



<style scoped>
</style>
