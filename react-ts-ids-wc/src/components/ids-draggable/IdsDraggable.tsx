import React, { useCallback, useRef } from 'react';
import { useEvent } from '../../hooks/useEvent';
import type IdsDraggableType from 'ids-enterprise-wc/components/ids-draggable/ids-draggable';
import 'ids-enterprise-wc/components/ids-draggable/ids-draggable';


interface IdsDraggableProps {
  children: any;
  id?: string;
  axis?: 'x' | 'y';
  handle?: string;
  maxTransformX?: number;
  minTransformX?: number;
  maxTransformY?: number;
  minTransformY?: number;
  parentContainment?: boolean;

  onDrag?: (e: any) => void;
  onDragStart?: (e: any) => void;
  onDragEnd?: (e: any) => void;
}

const IdsDraggable: React.FC<IdsDraggableProps> = (props) => {
  const dragRef = useRef<IdsDraggableType>();
  // NOTE: Also possible to init dragRef using this approach:
  // let dragRef = useEvent<IdsDraggableType>('ids-dragstart', handleDragStart);

  const handleDrag = useCallback((e: any) => props.onDrag?.(e), [props]);
  const handleDragStart = useCallback((e: any) => props.onDragStart?.(e), [props]);
  const handleDragEnd = useCallback((e: any) => props.onDragEnd?.(e), [props]);

  useEvent('ids-dragstart', handleDragStart, dragRef);
  useEvent('ids-drag', handleDrag, dragRef);
  useEvent('ids-dragend', handleDragEnd, dragRef);

  return (
    <ids-draggable
      ref={dragRef}
      id={props.id}
      axis={props.axis}
      handle={props.handle}
      max-transform-x={props.maxTransformX}
      min-transform-x={props.minTransformX}
      max-transform-y={props.maxTransformY}
      min-transform-y={props.minTransformY}
      parent-containment={props.parentContainment}
    >
      {props.children}
    </ids-draggable>
  );
};

export default IdsDraggable;
