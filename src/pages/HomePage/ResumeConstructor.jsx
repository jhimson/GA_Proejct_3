import { AlignmentType, Document, TabStop, HeadingLevel, Packer, Paragraph, SectionType, maxRightTabStop, TabStopType, TextRun , TabStopPosition } from 'docx'
import { saveAs } from 'file-saver'

export default function resumeConstructor(resume) {
    const { personal, statement, skills, projects, workHistory, education } = resume

    //will need to include some sort of algorithmic scoring logic for each line within the docx.
    //alert('in resume constructor')

    //console.log('Constructing from... ', personal, statement, skills, projects, workHistory, education)

    const PROPERTIES = {
        page: {
            margin: {
                top: '0.5in',
                right: '0.5in',
                bottom: '0.5in',
                left: '0.5in',
            },
            size:{
                width:'8.5in',
                height:'11in'
            } 
        },
        type: SectionType.CONTINUOUS,
    }

    const HEADER = (headerText , alignment) => {
        return new Paragraph({
            alignment: alignment,
            children: [
                new TextRun({
                    font: 'Garamond',
                    text: headerText.toUpperCase(),
                    size: 24,
                    bold: true,
                    color: '76a5af',
                })
            ]
        })
    }

    const SUBHEADER = (subheaderText, dateStart, dateEnd) => {
        return new Paragraph({
            alignment: AlignmentType.LEFT,
            children: [
                new TextRun({
                    font: 'Garamond',
                    text: subheaderText,
                    size: 24,
                    bold: true,
                }),
                /////put math in here to align dates and paragraph on same line.
                new TextRun({
                    font: 'Garamond',
                    text: `\t${dateStart}-${dateEnd}`,
                    size: 24,
                }),
            ],
            tabStops: [{
                            type: TabStopType.RIGHT,
                            position: '7.4in'
                        }],
        })
    }

    const BULLET = (bodyText) => {
        return new Paragraph({
            children: [
                new TextRun({
                    font: 'Garamond',
                    text: bodyText,
                    size: 22,
                })
            ],
            bullet: {
                level: 0
            }
        })
    }

    const SPACER = new TextRun({
        font: 'Garamond',
        text: '',
        size: 14,
        break: 1,
    })

    const PARASPACER = new Paragraph({
        children:[
            new TextRun({
                font: 'Garamond',
                text: '',
                size: 14,
            })
        ]
    })

    const MICROSPACER = new TextRun({
        font: 'Garamond',
        text: '',
        size: 4,
        break: 1,
    })


    const createSectionSubSections = (section) => {
        let output = [HEADER(section.header , AlignmentType.LEFT)]

        for (let subsect of section.subsections) {
            output.push(SUBHEADER(subsect.subheader, subsect.dateStart, subsect.dateEnd))
            subsect.lines.forEach((line) => output.push(BULLET(line.body)))
            output.push(PARASPACER)
        }
        console.log('my output is ' , output)
        return output
    }

    const sectPersonal = {
        properties: PROPERTIES,
        children: [
            new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                    new TextRun({
                        font: 'Garamond',
                        text: personal.name,
                        size: 56,
                        bold: true,
                        color: '76a5af',
                    }), 
                    MICROSPACER,
                    new TextRun({
                        font: 'Garamond',
                        text: `${personal.email} | ${personal.phone}`,
                        size: 22,
                    }),
                    new TextRun({
                        font: 'Garamond',
                        text: `${personal.link1} | ${personal.link2} | ${personal.link3}`,
                        size: 22,
                        break: 1,
                    }),
                    SPACER
                ]
            })
        ]
    }

    const sectStatement = {
        properties: PROPERTIES,
        children: [
            HEADER(statement.header , AlignmentType.CENTER),
            new Paragraph({
                alignment: AlignmentType.JUSTIFIED,
                children: [
                    new TextRun({
                        font: 'Garamond',
                        text: statement.body,
                        size: 22,
                        break: 0,
                    }),
                    SPACER
                ]
            })
        ]
    }

    const sectSkills = {
        properties: PROPERTIES,
        children: [
            HEADER(skills.header , AlignmentType.CENTER),
            new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                    new TextRun({
                        font: 'Garamond',
                        text: skills.skills.map((sk) => sk.skill).join(' | '),
                        size: 22,
                    }),
                    SPACER
                ]
            })
        ]
    }

    const sectProjects = {
        properties: PROPERTIES,
        children: createSectionSubSections(projects)
    }

    const sectWorkHistory = {
        properties: PROPERTIES,
        children: createSectionSubSections(workHistory)
    }

    const sectEducation = {
        properties: PROPERTIES,
        children: createSectionSubSections(education)
    }

    const doc = new Document({
        sections: [sectPersonal, sectStatement, sectSkills, sectProjects, sectWorkHistory, sectEducation]
    })

    Packer.toBlob(doc).then((blob) => {
        saveAs(blob, 'blob.docx')
        console.log('Document created')
    })
}