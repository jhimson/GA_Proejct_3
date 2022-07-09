const testData = require('./sampleUser')

  const job = require('./remotiveSample')
  const words = [
    'python',
    'javascript'
  ]


function optimizeResume( jobKeywordList , resume , spaceConstraints){
  //console.log('my resume is , ' ,resume)
    const { personal, statement, skills, projects, workHistory, education } = resume
    const sectionList = [projects, workHistory, education]

    let output = {
        personal:personal,
        statement:statement,
    }
    //console.log('my skills are ' , skills)
    const createSkills = ()=>{
      let skillList = {
        header:'Skills',
        skills:[]
      }
      
      skills.skills.forEach((skill)=>skill.priority===2 && skillList.skills.push(skill))
      skills.skills.forEach((skill)=>((skill.priority===1 || keywordList.includes(skill.skill))&& skillList.skills.length < 2) && skillList.skills.push(skill))
  
      output.skills=skillList
    }

    const createSection = (section) =>{
      let section = {
        cond:section.cond,
        header:section.header,
      }
    }

    createSkills()
    return output
}

console.log(optimizeResume(words, testData).skills)