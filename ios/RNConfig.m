//
//  RNConfig.m
//  ReactNativeBoilerplate
//
//  Created by Simon Hoye on 5/7/17.
//  Copyright © 2017 Simon Hoye. All rights reserved.
//

#import "RNConfig.h"

@implementation RNConfig

RCT_EXPORT_MODULE();

- (NSDictionary *)constantsToExport
{
  NSString* buildEnvironment = [[[NSBundle mainBundle] infoDictionary] valueForKey:@"BuildEnvironment"];
  return @{ @"buildEnvironment": buildEnvironment };
}

@end
