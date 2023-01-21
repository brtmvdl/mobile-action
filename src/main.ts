import * as core from '@actions/core'
// import {wait} from './wait'

async function run(): Promise<void> {
  try {
    const path: string = core.getInput('path')
    core.info(`Path: ${path}`)

    // core.debug(`Waiting ${ms} milliseconds ...`) 

    // core.debug(new Date().toTimeString())
    // await wait(parseInt(ms, 10))
    // core.debug(new Date().toTimeString())

    // core.setOutput('time', new Date().toTimeString())
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
