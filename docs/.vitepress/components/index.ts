import { Component } from 'vue'
import Demo from './demo'

// @ts-ignore
export const modules = import.meta.glob('/examples/**/*.vue')
export const globals: [string, Component][] = [['Demo', Demo]]
