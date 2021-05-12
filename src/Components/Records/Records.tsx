export default {}
// import * as strings from './strings'
// import React, { useMemo } from 'react'
// import withWidth, { WithWidth } from '@material-ui/core/withWidth'
// import FieldHelpers from '../../models/field/helpers'
// import { FieldRecord } from '../../models/field/schema'
// import Grid from '@material-ui/core/Grid'
// import { Maybe } from 'purify-ts'
// import { RecordElementRecord } from '../../models/recordElement/schema'
// import Typography from '@material-ui/core/Typography'
// import makeStyles from '@material-ui/core/styles/makeStyles'
// import { recordFontSizes } from './config'


// const useStyles = makeStyles(() => ({
//   typography: {
//     fontFamily: '\'Teko\', sans-serif;',
//   },
// }))

// interface RecordsProps extends
// WithWidth {
//   field: FieldRecord
//   record: Maybe<RecordElementRecord>
// }

// const Records = ({
//   field,
//   record,
//   width,
// }: RecordsProps) => {
//   const classes = useStyles()
//   const labelStyle = useMemo(() => ({fontSize:  recordFontSizes[width]}), [width])

//   const recordInfo = `${strings.bestRecord}: ${record.map(({value}) => value).orDefault(0)}`
//   const scoreInfo = `${strings.score}: ${FieldHelpers.getCellsSumValue(field)}`

//   return (
//     <Grid container spacing={1}>
//       <Grid item>
//         <Typography
//           gutterBottom
//           className={classes.typography}
//           variant='h3'
//           color='primary'
//           style={labelStyle}
//         >
//           {recordInfo}
//         </Typography>
//       </Grid>
//       <Grid item>
//         <Typography
//           gutterBottom
//           className={classes.typography}
//           variant='h3'
//           color='primary'
//           style={labelStyle}
//         >
//           {scoreInfo}
//         </Typography>
//       </Grid>
//     </Grid>
//   )
// }

// export default withWidth()(Records)
