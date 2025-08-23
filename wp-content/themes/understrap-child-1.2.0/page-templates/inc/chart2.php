<?php $uniqueId2 = $layout_id . get_row_index(); ?>
<div id="chart<?php echo $uniqueId2; ?>" class="p-2" style="height:460px"></div>
<script defer>
document.addEventListener('DOMContentLoaded', function() {
var chartDom = document.getElementById('chart<?php echo $uniqueId2; ?>');
var myChart = echarts.init(chartDom);
var option;

option = {
  xAxis: {
    type: 'category',
    data: [<?php
          if (have_rows('chart_repeater')):
              $items = [];
              while (have_rows('chart_repeater')): the_row();
                  $data = get_sub_field('data_title');
                  // Escape backslashes first, then single quotes
                  $data_safe = str_replace(["\\", "'"], ["\\\\", "\\'"], $data);
                  $items[] = "'" . $data_safe . "'";
              endwhile;
              echo implode(',', $items);
          endif;
          ?>]
  },
  yAxis: {
    type: 'value'
  },
  color: ['<?php the_sub_field('line_color')?>'], 
  series: [
    {
  data: [<?php
            if (have_rows('chart_repeater')):
                $items = [];
                while (have_rows('chart_repeater')): the_row();
                    $n = get_sub_field('numbers');
                    $items[] = $n;
                endwhile;
                echo implode(',', $items);
            endif;
            ?>],
      type: 'line'
    }
  ]
};
option && myChart.setOption(option);
 });

</script>


